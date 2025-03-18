package com.dropbox.service;

import com.dropbox.db.model.FileDocument;
import com.dropbox.db.repository.FileRepository;
import com.dropbox.utils.FileUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class FileService {

    private final FileRepository fileRepository;

    public Mono<FileDocument> uploadFile(FilePart filePart) {
        return FileUtil.convertFilePartToBytes(filePart)
                .flatMap(bytes -> {
                    FileDocument fileDoc = new FileDocument();
                    fileDoc.setName(filePart.filename());
                    fileDoc.setType(filePart.headers().getContentType().toString());
                    fileDoc.setContent(bytes);
                    return fileRepository.save(fileDoc);
                });
    }

    public Flux<FileDocument> getAllFiles() {
        return fileRepository.findAll();
    }

    public Mono<FileDocument> getFileById(String id) {
        return fileRepository.findById(id);
    }
}
