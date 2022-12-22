import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ImagesPreview from '../ImagesPreview';

function EditPatternGroup({
  imageData,
}) {
  // const [pattern, setPattern] = useState([]);

  return (
    <div
      className="edit-group-pattern"
    >
      <p>To be implemented...</p>
      <ImagesPreview
        imageData={imageData}
        patterns={[]}
      />
    </div>
  );
}


EditPatternGroup.propTypes = {
  imageData: PropTypes.object,
};

EditPatternGroup.defaultProps = {
  imageData: null,
};

export default EditPatternGroup;
