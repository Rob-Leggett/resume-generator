import { render } from '@testing-library/react';
import { renderIcon } from '../../components/Icons/Icons';

describe('Icons', () => {
  describe('renderIcon', () => {
    it('should return null for undefined icon', () => {
      const result = renderIcon(undefined);
      expect(result).toBeNull();
    });

    it('should return null for empty string', () => {
      const result = renderIcon('');
      expect(result).toBeNull();
    });

    it('should render MdEmail icon', () => {
      const { container } = render(<>{renderIcon('MdEmail')}</>);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should render FaPhoneAlt icon', () => {
      const { container } = render(<>{renderIcon('FaPhoneAlt')}</>);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should render CgWebsite icon', () => {
      const { container } = render(<>{renderIcon('CgWebsite')}</>);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should render FaGithub icon', () => {
      const { container } = render(<>{renderIcon('FaGithub')}</>);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should render FaLinkedin icon', () => {
      const { container } = render(<>{renderIcon('FaLinkedin')}</>);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should render FaCalendarAlt icon', () => {
      const { container } = render(<>{renderIcon('FaCalendarAlt')}</>);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should render FaRegCalendarAlt icon', () => {
      const { container } = render(<>{renderIcon('FaRegCalendarAlt')}</>);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should return undefined for unknown icon', () => {
      const result = renderIcon('UnknownIcon');
      expect(result).toBeUndefined();
    });
  });
});
