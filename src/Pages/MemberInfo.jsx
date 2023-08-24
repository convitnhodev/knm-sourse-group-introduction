import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import { members } from '../Constants/constants';
import ImageSlider from '../Components/elements/ImageSlider';
import { Link } from 'react-router-dom';

const MemberInfo = ({ id }) => {
    const member = members.find((member) => member.id === id);
    return (
        <div id={`member_${member.id}`} className="w-full flex justify-center overflow-hidden-web">
            <div className="w-full xl:w-[70%] flex flex-col pb-16">
                <div className="w-full">
                    <SectionTitle title={member.title} />
                </div>
                <div className="w-full flex flex-col-reverse sm:flex-row">
                    <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
                        <LazyMotion features={domAnimation} strict>
                            <m.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 20,
                                }}
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                                className="text-grayscale-50 p-6 text-center flex flex-col gap-6"
                            >
                                {member.description?.map((text, index) => (
                                    <span key={index}>{text}</span>
                                ))}
                            </m.p>
                        </LazyMotion>
                    </div>
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center">
                        <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
                            <ImageSlider images={[member.icon]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Link
                    to="/"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center"
                    style={{ backgroundColor: 'blue', color: 'white' }}
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default MemberInfo;
