import React, { useState } from 'react';
import NewsUpdateForm from './NewsUpdateForm';
// import NewsUpdateDetails from './NewsUpdateDetails';
import NewsUpdateTable from './NewsUpdateTable'

function CreateNewsUpdate() {
  const [isFormVisible, setIsFormVisible] = useState(false);
//   const [newsUpdate, setNewsUpdate] = useState(null);

  function handleCreateNewsUpdate() {
    setIsFormVisible(true);
  }

//   function handlePublishNewsUpdate(data) {
//     setNewsUpdate(data);
//     // setIsFormVisible(false);
//   }

  return (
    <div>
      {isFormVisible ? (
        <>
        {/* <NewsUpdateForm onPublish={handlePublishNewsUpdate} /> */}
        <NewsUpdateForm  />
        <div>
        {/* {newsUpdate && (
          <NewsUpdateDetails
            title={newsUpdate.title}
            details={newsUpdate.details}
            date={newsUpdate.date}
          />
        )} */}
      </div>
      </>
      ) : (
        <div>
          <button onClick={handleCreateNewsUpdate}>Create News Update</button>
        </div>
      )}
      <NewsUpdateTable/>
    </div>
  );
}

export default CreateNewsUpdate;
