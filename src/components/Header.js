import Button from './Button'

const Header = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className="header">
            <h1>Does it click?</h1>
            <Button color='green' text='Find out..' 
            onClick={onClick}
            />
        </header>
        
    )
}

export default Header