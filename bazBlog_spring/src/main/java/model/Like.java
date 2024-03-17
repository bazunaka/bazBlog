package model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Tweet tweet;
}
