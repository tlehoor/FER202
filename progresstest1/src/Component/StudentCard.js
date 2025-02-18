import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const StudentCard = ({ student }) => {
    const [attendance, setAttendance] = useState("");

    const handleSubmit = () => {
        alert(`Student: ${student.name} - Attendance: ${attendance}`);
    };

    return (
        <Card style={{ width: "21rem", margin: "1rem" }}>

            <Card.Img variant="top" src={student.image} />

            <Card.Body>

                <Card.Title>
                    {student.id}</Card.Title>


                <Card.Subtitle className="mb-2 text-muted">
                    {student.name} | {student.location}
                </Card.Subtitle>

                <Form>
                    <Form.Check
                        type="radio"
                        label="Absent"
                        name={`attendance-${student.id}`}
                        id={`absent-${student.id}`}
                        onChange={() => setAttendance("Absent")}
                    />
                    <Form.Check
                        type="radio"
                        label="Present"
                        name={`attendance-${student.id}`}
                        id={`present-${student.id}`}
                        onChange={() => setAttendance("Present")}
                    />
                </Form>

                <Button
                    variant="primary"
                    className="mt-3"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Card.Body>
        </Card>
    );
};

export default StudentCard;
