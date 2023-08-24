import { m, LazyMotion, domAnimation } from 'framer-motion';
import { members } from '../Constants/constants';

const MembersCards = () => {
    return (
        <div className="flex">
            <LazyMotion features={domAnimation} strict>
                {members.map((member, index) => (
                    <m.div
                        initial={{ scale: 0.8 }}
                        animate={{
                            rotate: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'linear',
                        }}
                        style={{ zIndex: `${index + 1}`, transition: 'all 0.6s' }}
                        key={index}
                        className="card w-[450px] h-[450px] flex flex-col items-center  bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer"
                    >
                        <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
                            <img
                                className="h-[150px] flex justify-center items-center w-[150px]  bg-primary-600 rounded-[50%] p-1 object-contain"
                                src={member.icon}
                                alt={member.title}
                            />
                            <span
                                className="text-xl"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 'bold',
                                }}
                            >
                                {member.title}
                            </span>
                            {member.description.map((desc, index) => (
                                <span
                                    className="text-center bg-primary-600 text-grayscale-50 rounded-xl text-sm p-4"
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: '400',
                                    }}
                                >
                                    {desc}
                                </span>
                            ))}
                        </div>
                    </m.div>
                ))}
            </LazyMotion>
        </div>
    );
};

export default MembersCards;
