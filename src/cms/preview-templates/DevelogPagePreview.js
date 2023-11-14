import React from 'react';
import PropTypes from 'prop-types';
import { DevelogTemplate } from '../../templates/develog';

const DevelogPreview = ({ entry, widgetFor }) => {
  const series = entry.getIn(['data', 'series']);
  return (
    <DevelogTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      series={series && series.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

DevelogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default DevelogPreview;
