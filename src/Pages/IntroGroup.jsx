import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import { memoji } from '../Constants/constants';
import { introduction } from '../Constants/constants';
import ImageSlider from '../Components/elements/ImageSlider';
import AstronautImage from '../Components/AstronautImage';

const IntroGroup = () => {
    return (
        <div id="about" className="w-full flex flex-col items-center justify-center overflow-hidden-web">
            <div className="w-full xl:w-[70%] flex flex-col pb-16">
                <div className="w-full">
                    <SectionTitle title="NHÓM 6" subtitle="Introduction" />
                </div>
                <div className="relative w-full flex flex-col-reverse sm:flex-row">
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
                                <span className="text-primary-400">{introduction.text[0]}</span>
                                <span>{introduction.text[1]}</span>
                                <span>{introduction.text[2]}</span>
                                <span>{introduction.text[3]}</span>
                            </m.p>
                        </LazyMotion>
                    </div>
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center">
                        <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
                            <ImageSlider images={memoji.image} />
                        </div>
                    </div>
                    <div className="absolute w-full h-full top-[-40%] right-[-75%] sm:right-[-52%]">
                        <AstronautImage />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Rn5fAJDwLK0?si=_Go13i1iFOig4awg"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default IntroGroup;
