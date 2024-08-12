



import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import './info.scss';

const Info = () => {
  const { t } = useTranslation(); 

  return (
    <section id="info" className="info-section">
      <div className="container">
        <div className="info-content">
          <h2>{t('infoAboutUsTitle')}</h2>
          <p>{t('infoAboutUsContent')}</p>

          <h2>{t('infoMissionTitle')}</h2>
          <p>{t('infoMissionContent')}</p>

          <h2>{t('infoObligationsTitle')}</h2>
          <p>{t('infoObligationsContent')}</p>

          <h2>{t('infoActivityTitle')}</h2>
          <p>{t('infoActivityContent')}</p>
        </div>
        <div className="info-image">
          <img src="/assets/images/info3.jpg" alt="Info" />
        </div>
      </div>
    </section>
  );
};

export default Info;
