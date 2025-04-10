function Warning(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12 16.99V17m0-10v7m9-2a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  
  export default Warning
  