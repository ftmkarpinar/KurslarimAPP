function Course({course}) {
    const {title, description, price, link, image} = course;

  return (
    <div className="course">
            <img className="course-img"src={image} width={250} height={200}/>
            <h4 className="course-title">{title}</h4>
            <p className="course-desc">{description}</p>
            <h3 className="course-price">{price}</h3>
            <div className="course-link">
                <a 
                style={{textDecoration: 'none'}} 
                href= {link}
                target="_blank"
                rel="noreferrer"
                className="buy-link"
                >
                    Satın Almak İçin
                </a>
                </div>
    </div>
  )
}

export default Course