import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import "./Questioncard.css";

const Questioncard = ({ cards, handleDelete }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandToggle = (index) => {
        // Toggle between expand and collapse
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

        

    return (
        <div>
            {cards.map((card, index) => (
                <Card fluid className="card-container" key={index}>
                    <Card.Content>
                        <Card.Header className="title">{card.title}</Card.Header>
                        <Card.Meta className="fit-content-bold">
                            {card.date} - {card.tag}
                        </Card.Meta>

                        {/* Conditionally apply a class based on whether the card is expanded */}
                        <Card.Description className={`fit-content ${expandedIndex === index ? "expanded" : "collapsed"}`}>
                            {card.question}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button className="question-button" onClick={() => handleDelete(index)}>Delete</Button>
                        <Button className="question-button" onClick={() => handleExpandToggle(index)}>
                            {expandedIndex === index ? "Collapse" : "Expand"}
                        </Button>
                    </Card.Content>
                </Card>
            ))}
        </div>
    );
};

export default Questioncard;
