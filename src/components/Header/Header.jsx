import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center max-w-7xl mx-auto p-4 border-b-2'>
            <h1 className="text-4xl font-bold">
            React Knowledge cafe
            </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;