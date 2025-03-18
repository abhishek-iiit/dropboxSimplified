package com.dropbox.controller;

import com.dropbox.db.model.FileDocument;
import com.dropbox.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FileController {

    private final FileService fileService;

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Mono<FileDocument> upload(@RequestPart("file") FilePart filePart) {
        return fileService.uploadFile(filePart);
    }

    @GetMapping("/")
    public Flux<FileDocument> getAllFiles() {
        return fileService.getAllFiles();
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<byte[]>> download(@PathVariable String id) {
        return fileService.getFileById(id)
                .map(fileDoc -> ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDoc.getName() + "\"")
                        .contentType(MediaType.parseMediaType(fileDoc.getType()))
                        .body(fileDoc.getContent()))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}
