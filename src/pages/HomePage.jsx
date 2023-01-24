import '../styles/style.scss';

const HomePage = () => {
  return (
    <>
      <div style={{ display: 'flex', alignContent: 'center', height: '62px', backgroundColor: '#34485a', color: 'white', padding: '5px 20px' }}>
        <h3>Logo</h3>
      </div>
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', height: `calc(99vh - 122px)`, width: '100vw',  }}>
        <div style={{ width: '70%', height: '70%', borderRadius: '5px' }} >
          <div>
            <p style={{ padding: '10px' }}>
              Our mission at Refabulous is to provide a trustworthy and quality service to all of our clients. We aim to build healthy working relations with insurance providers, across our country. This would allow our company to become a trusted household service provider.
            </p>
          </div>
        </div>
        <div style={{ width: '30%' }}>
          <div style={{ height: '20px', width: '100%', backgroundColor: '#19a4bc' }}>
            <div style={{ padding: '10px' }}>
              <h3 style={{ color: 'white' }}>
                Our Motto:
              </h3>
              <p style={{ color: 'lightgray' }}><span style={{ textDecoration: 'Italic' }}>"Patience, persistence and perspiration make an unbeatable combination for success"</span> – Napoleon Hill</p>
            </div>
          </div>
          <div style={{ height: 'calc(100% - 40px)', width: '100%', backgroundColor: '#34485a', color: 'white', borderRadius: '0px 0px 0px 10px' }}>
            
          </div>
          <div style={{ height: '20px', width: '100%', backgroundColor: 'white' }}></div>
        </div>
      </div>  
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', height: '62px', backgroundColor: 'rgb(50, 50, 50)', color: 'white', padding: '5px 20px' }}>
        <h6>Copyright 2023</h6>
      </div>  
    </>
  )
}

export default HomePage