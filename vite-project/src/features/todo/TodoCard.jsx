import { Card, Avatar, Title, Status, CardDescription } from "./styles";

export default function TodoCard({ title, completed, userName, userEmail, userId }) {
    return (
        <Card>
            <Avatar src={`https://i.pravatar.cc/100?img=${userId}`} alt="todo image" />
            <p>{userName}</p>
            <p>{userEmail}</p>
            <p>{completed}</p>
            <Status completed = {completed} centered={true}>{completed ? 'Completed' : 'Not Completed'}</Status>
            <CardDescription>{title}</CardDescription>
        </Card> 
    );
}