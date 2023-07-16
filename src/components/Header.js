import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onAdd} />
        </header>
    )
}
// CSS in JS
// const headingStyle = {
//     backgroundColor: 'green'
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header