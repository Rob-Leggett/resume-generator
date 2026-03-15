import { FaCalendarAlt, FaGithub, FaLinkedin, FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

export const renderIcon = (icon: string | undefined) => {
  if (!icon) return null;

  switch (icon) {
    case 'MdEmail': {
      return <MdEmail />
    }
    case 'FaPhoneAlt': {
      return <FaPhoneAlt />;
    }
    case 'CgWebsite': {
      return <CgWebsite />;
    }
    case 'FaGithub': {
      return <FaGithub />;
    }
    case 'FaLinkedin': {
      return <FaLinkedin />;
    }
    case 'FaCalendarAlt': {
      return <FaCalendarAlt />;
    }
    case 'FaRegCalendarAlt': {
      return <FaRegCalendarAlt />;
    }
  }
}