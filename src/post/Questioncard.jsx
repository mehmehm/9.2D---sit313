import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import ReactMarkdown from "react-markdown"; // To render markdown as HTML
import "./Questioncard.css";



const MAX_PREVIEW_LINES = 5; // Set the maximum number of lines to show in the collapsed view

const Questioncard = ({ cards, handleDelete }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandToggle = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const renderCodePreview = (code) => {
        // Split the code into lines and only display the first MAX_PREVIEW_LINES if not expanded
        const lines = code.split('\n');
        if (lines.length > MAX_PREVIEW_LINES) {
            return lines.slice(0, MAX_PREVIEW_LINES).join('\n') + '\n...'; // Add ellipsis to indicate more code
        }
        return code;
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
                            <p>{card.question}</p>
                            {card.code && (
                                <div className="code-container">
                                    <pre>
                                        <code>
                                            {expandedIndex === index ? card.code : renderCodePreview(card.code)}
                                        </code>
                                    </pre>
                                </div>
                            )}
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
