package com.dropbox.db.repository;

import com.dropbox.db.model.FileDocument;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends ReactiveMongoRepository<FileDocument, String> {
}
