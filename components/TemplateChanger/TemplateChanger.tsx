import { useResumeData } from '../../src/contexts';
import { useHasMounted } from '../../src/hooks/useHasMounted';
import styles from './TemplateChanger.module.css';

const TemplateChanger = () => {
  const mounted = useHasMounted();
  const { templateName, availableTemplates, setTemplate, isLoading } = useResumeData();

  const handleSelect = (selectedTemplate: string) => {
    setTemplate(selectedTemplate);
  };

  if (!mounted) return null;

  return (
    <div className={styles.templateContainer}>
      <span className="template-selector">
        <span className="template-msg">Template:</span>
        <span className="select-dropdown">
          <select 
            value={templateName} 
            onChange={(e) => handleSelect(e.target.value)}
            disabled={isLoading}
          >
            {availableTemplates.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </span>
      </span>
    </div>
  );
};

export default TemplateChanger;
