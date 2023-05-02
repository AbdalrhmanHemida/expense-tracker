import './ExpenseItem.css'
import Card from '../UI/Card'
import {ExpenseDate} from './ExpenseDate'

interface Props {
    title: string;
    amount: number;
    date: Date
}

export const ExpenseItem = (props: Props) => {
    const {title, amount, date} = props;
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date= {date}/>
            
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </Card>
    )
}