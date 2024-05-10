import { ChangeEventHandler, FC } from 'react';

// Hooks
import { useTranslation } from 'react-i18next';

// Localization
import { localesKeys } from 'localization';

const Localization: FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    i18n.changeLanguage(event.target.value);
    localStorage.LOCALE = event.target.value;
  };

  return (
    <div>
      <h1>{t('Localization')}</h1>
      <p>{t('The application must support 2 localization languages')}</p>
      <select onChange={changeLanguageHandler} value={i18n.language}>
        {localesKeys.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Localization;
