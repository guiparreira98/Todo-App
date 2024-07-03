
import MainMenu from '../MainMenu/MainMenu';
import './styles.scss';
import { FcTodoList } from "react-icons/fc";

export default function Header(){
    return(
       <header className="main">
            <FcTodoList />
            <div>Todo App</div>
            <div>By Guilherme Parreira</div>
       </header>
    )
}