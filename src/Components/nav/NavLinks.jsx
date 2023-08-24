const NavLinks = ({ handleClick }) => {
    return (
        <div className="w-full h-full">
            <ul className="h-full w-full flex flex-col items-center justify-center font-medium text-lg">
                <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
                    <a className="active:text-grayscale-100" onClick={handleClick} href="#about">
                        Thông tin nhóm
                    </a>
                </li>
                <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
                    <a className="active:text-grayscale-100" onClick={handleClick} href="#skills">
                        Thành viên
                    </a>
                </li>
                <li className="border-t-[1px] border-b-[1px] border-grayscale-950 w-full flex justify-center p-3">
                    <a className="active:text-grayscale-100" onClick={handleClick} href="#contact">
                        Liên hệ
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavLinks;
