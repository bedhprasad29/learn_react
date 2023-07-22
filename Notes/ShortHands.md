
# Map only if an Array exists
 - arr?.  // ? is required before chaining to check if array exists
 <h2> { props.arr?.map(title => {
        return <div key={title}>{title}</div>;
      })} 
 </h2>