import React from 'react';
import { Link } from 'react-router-dom';
import { URL_HOME } from 'utils/page-url';

const Breadcrumb = (props)=>{
 
  const defaultProps = {
    listData: [
      {
        name: 'Home',
        href: URL_HOME(),
      }
    ]
  };
  const currentProps = {...defaultProps ,...props};
  return(
    <ol className="breadcrumb">
      {currentProps.listData && currentProps.listData.map((data, index, list) =>{
        if((index + 1) === list.length){
          return <li key={index} className="breadcrumb-item active">{data.name}</li>
        }
        return (
          <li key={index} className="breadcrumb-item">
            <Link to={data.href}>{data.name}</Link>
          </li>
        )
      })}
    </ol>
  );
};

export default Breadcrumb;