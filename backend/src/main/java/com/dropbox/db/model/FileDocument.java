package com.dropbox.db.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "files")
@Data
public class FileDocument {
    @Id
    private String id;
    private String name;
    private String type;
    private byte[] content;
}
