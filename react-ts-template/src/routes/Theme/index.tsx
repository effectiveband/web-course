import { FC, ChangeEventHandler } from 'react';
import { observer } from 'mobx-react-lite';

// Hooks
import { useTranslation } from 'react-i18next';

// Stores
import themeStore, { themes } from 'stores/ThemeStore';

// Styles
import classes from './Theme.module.css';

const Theme: FC = () => {
  const { t } = useTranslation();

  const { activeTheme } = themeStore;

  const changeLanguageHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    themeStore.changeActiveTheme(event.target.value);
  };

  return (
    <div className={classes.background}>
      <h1 className={classes.text}>{t('Theme')}</h1>
      <p className={classes.text}>
        {t('The application must support dark and light themes')}
      </p>
      <select onChange={changeLanguageHandler} value={activeTheme}>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

export default observer(Theme);
