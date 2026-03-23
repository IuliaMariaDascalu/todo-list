import { Card, Avatar, Title, Status, CardDescription } from "./styles";

export default function TodoCard({ title, completed, userName, userEmail, userId }) {
    return (
        <Card>
            <Avatar src={`https://i.pravatar.cc/100?img=${userId}`} alt="todo image" />
            <div>
                <p>{userName}</p>
                <p>{userEmail}</p>
                <Status completed = {completed} centered={true}>{completed ? 'completed' : 'not completed'}</Status>
            </div>
            <CardDescription>{title}</CardDescription>
        </Card> 
    );
}