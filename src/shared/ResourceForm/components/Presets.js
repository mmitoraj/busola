import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'shared/components/Dropdown/Dropdown';
import './Presets.scss';

export function Presets({ presets, onSelect, ...otherProps }) {
  const { t } = useTranslation();
  const options = presets.map(({ name }) => ({
    key: name,
    text: name,
  }));

  return (
    <div className="fd-margin-bottom--xs">
      <Dropdown
        className="resource-form__presets"
        placeholder={t('common.create-form.choose-preset')}
        compact
        options={options}
        selectedKey={''}
        onSelect={(e, preset) => {
          e.stopPropagation();
          onSelect(presets.find(p => p.name === preset.key));
        }}
        {...otherProps}
      />
    </div>
  );
}