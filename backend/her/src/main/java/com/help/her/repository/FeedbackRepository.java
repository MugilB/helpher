package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.help.her.model.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
