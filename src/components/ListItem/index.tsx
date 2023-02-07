import * as C from './styles';
import { Item } from '../../types/Item';

type Props = { //CADA ITEM TERA UM ITEM DO TIPO TAREFA E UM ONCLICK COMO PROPS
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => { //PASSANDO AS PROPS
    return (
        <C.Container done={item.done}> //PASSA UM BOOLEAN DE PARAMETRO PARA P STYLE. ESSE BOOLEAN VER SE TA FEITO OU NAO A TAREFA
            <input
                type="checkbox" 
                checked={item.done} //SE FOR FALSE NAO MARCA, SE TIVER TRUE MARCA
                onChange={e => onChange(item.id, e.target.checked)} //EVENTO DE CLICK PARA ALTERAR SE TIVER MARCADO OU NAO 
            />
            <label>{item.name}</label> //O NOME DA TAREFA
        </C.Container>
    );
}