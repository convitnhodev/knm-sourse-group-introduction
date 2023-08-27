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
                <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
                <a className="active:text-grayscale-100" href="https://studenthcmusedu-my.sharepoint.com/personal/20120180_student_hcmus_edu_vn/_layouts/15/onedrive.aspx?fbclid=IwAR1guGFVKNKo%2DsxSKeW6IrIK1ZKPonA2xBEYKUY2v2SfICLGguDNuRjW0aw&id=%2Fpersonal%2F20120180%5Fstudent%5Fhcmus%5Fedu%5Fvn%2FDocuments%2FKyNangMem%2FHopDongThanhLapNhom%2FNhom6%5FHopDongThanhLapNhom%2Epdf&parent=%2Fpersonal%2F20120180%5Fstudent%5Fhcmus%5Fedu%5Fvn%2FDocuments%2FKyNangMem%2FHopDongThanhLapNhom" target="_blank" rel="noopener noreferrer">
                Biên bản nhóm
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
