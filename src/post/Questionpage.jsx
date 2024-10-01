import React, { useState } from "react";
import { Button, Input, Form, Divider } from "semantic-ui-react";
import Heading from "./Heading";
import "./Questionpage.css";
import Questioncard from "./Questioncard";
import AddCardInput from "./AddCardInput";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/material.css"; // Import the dark theme

function Questionpage() {
    const [cards, setCards] = useState([
        {
            title: "OOP?",
            date: "12-12-2023",
            question: "I'm struggling to understand OOP. What are the main principles?",
            tag: "OOP, C#, Software Engineering",
        },
        {
            title: "Why do monkeys climb trees?",
            date: "14-10-2020",
            question: "If humans evolve from monkeys, why don't humans climb trees? Hmm, sus",
            tag: "Shitpost, intrusive thought",
        },
    ]);

    const [newCard, setNewCard] = useState({
        title: "",
        date: new Date().toLocaleDateString(), // Default to current date
        question: "",
        tag: "",
        code: ""
    });

    const [searchQuery, setSearchQuery] = useState(""); // State for search input

    // Handle input change for the new question card
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCard((prevCard) => ({
            ...prevCard,
            [name]: value,
        }));
    };

    // Function to add a new question card to the list
    const handleAddCard = () => {
        setCards([...cards, newCard]);
        setNewCard({
            title: "",
            date: new Date().toLocaleDateString(), // Reset to current date
            question: "",
            tag: "",
            code: "",
        }); // Clear input fields
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    // Filter cards based on search query (searches title, tag, or date)
    const filteredCards = cards.filter((card) => {
        return (
            card.title.toLowerCase().includes(searchQuery) ||
            card.tag.toLowerCase().includes(searchQuery) ||
            card.date.toLowerCase().includes(searchQuery)
        );
    });

    return (
        <div>
            <Heading text="Find Questions" />
            <br />

            {/* Input for filtering */}
            <Input
                placeholder="Filter by title, tag, or date"
                style={{ marginBottom: "20px", width: "100%" }}
                value={searchQuery} // Bind input value to search query state
                onChange={handleSearchChange} // Call search handler on input change
            />

            <Divider />

            {/* Pass filtered cards and delete handler to Questioncard */}
            <Questioncard cards={filteredCards} handleDelete={() => {}} />

            <Divider />

            {/* Add a new question form */}
            <Heading text="Add a New Question" />
            <Form>
                <AddCardInput
                    name="title"
                    tag="Question Title: "
                    size="1200px"
                    placeholder="Title of your question"
                    value={newCard.title}
                    change={handleInputChange}
                />
                <AddCardInput
                    name="tag"
                    tag="Tags: "
                    size="1200px"
                    placeholder="Insert tags related to the questions"
                    value={newCard.tag}
                    change={handleInputChange}
                />
                <AddCardInput
                    name="date"
                    tag="Date: "
                    size="1200px"
                    placeholder="Enter today's date"
                    value={newCard.date}
                    change={handleInputChange}
                />
                <AddCardInput
                    name="question"
                    tag="Question: "
                    size="1200px"
                    placeholder="Enter your question..."
                    value={newCard.question}
                    change={handleInputChange}
                />
                <label>Add code (optional):</label>
                <CodeMirror className="code-mirror-container"
                    value={newCard.code}
                    options={{
                        mode: "markdown", // CodeMirror supports multiple modes like JavaScript, Python, etc.
                        theme: "material", // Set the dark theme
                        lineNumbers: true
                    }}
                    onBeforeChange={(editor, data, value) => {
                        setNewCard((prevCard) => ({
                            ...prevCard,
                            code: value, // Update the code in newCard
                        }));
                    }}
                />
                <br />
                <Button onClick={handleAddCard}>Add Question</Button>
            </Form>
        </div>
    );
}

export default Questionpage;
