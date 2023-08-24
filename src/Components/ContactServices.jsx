import { m, LazyMotion, domAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../Constants/constants';

const ContactServices = () => {
    return (
        <div
            className="w-full sm:w-[40%] h-full flex flex-col gap-4 justify-center"
            style={{ fontFamily: 'Poppins,sans-serif' }}
        >
            <LazyMotion features={domAnimation} strict></LazyMotion>
        </div>
    );
};

export default ContactServices;
