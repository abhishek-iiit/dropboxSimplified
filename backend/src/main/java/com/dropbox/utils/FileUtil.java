package com.dropbox.utils;

import org.springframework.core.io.buffer.DataBufferUtils;
import org.springframework.http.codec.multipart.FilePart;
import reactor.core.publisher.Mono;

public class FileUtil {

    public static Mono<byte[]> convertFilePartToBytes(FilePart filePart) {
        return DataBufferUtils.join(filePart.content())
                .map(dataBuffer -> {
                    byte[] bytes = new byte[dataBuffer.readableByteCount()];
                    dataBuffer.read(bytes);
                    DataBufferUtils.release(dataBuffer);
                    return bytes;
                });
    }
}
