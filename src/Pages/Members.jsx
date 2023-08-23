import MarqueeCards from '../Components/MarqueeCards';
import SectionTitle from '../Components/SectionTitle';
import MembersCards from '../Components/MembersCards';

const Members = () => {
    return (
        <div id="skills" className="w-full overflow-hidden-web flex justify-center">
            <div className="w-full min-h-[600px] flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="MEMBERS" subtitle="WHAT I DO" />
                </div>
                <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full">
                    <div className="relative">
                        <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
                        <MarqueeCards direction="left">
                            <MembersCards />
                        </MarqueeCards>
                    </div>
                    {/* <div className="relative">
                        <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
                        <MarqueeCards direction="right">
                            <MembersCards />
                        </MarqueeCards>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Members;
