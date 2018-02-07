
anime({
    targets: '.box',
    translateX: [
      { value: 300, duration: 800 },
      { value: 200, duration: 3400 }
    ],
    translateY: [
        { value: 200, duration: 900 },
        { value: 50, duration: 3500 }
    ],
    rotate: '6turn',
    backgroundColor: 'rgb(43, 207, 10)',
    borderRadius:'50%',
    height: '200px',
    width: '200px',
    paddingTop: '30px',
    paddingLeft: '30px',
    delay: 1000,
    loop: true
  });
