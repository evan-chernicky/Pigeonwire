import { useSelect } from '@wordpress/data';
import placeholder from '../../../assets/images/placeholder.jpg'

function SingleListing({work}) {
    const {acf, featured_media, link} = work
    const {category, client} = acf || {}

    const image = useSelect(
        ( select ) =>
            featured_media ? select('core').getMedia(featured_media) : null,
        [ featured_media ]
    );

    const imageUrl = image ? image.source_url : placeholder;
    
  return (
    <li key={work.id}>
        <a href="#" className="work-listings__item">
            <div className="work-listings__image-container">
                <img className="work-listings__image" src={imageUrl}/>
                <div className="work-listings__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.944" height="19.968" viewBox="0 0 19.944 19.968">
                        <path id="Path_11" data-name="Path 11" d="M16.577,24.782a.98.98,0,0,0-.98-.98H9.214L25.549,7.477a.981.981,0,1,0-1.392-1.382L7.851,22.4V16.066a.98.98,0,1,0-1.961,0V24.89a.882.882,0,0,0,.882.882H15.6a.98.98,0,0,0,.98-.99Z" transform="translate(-5.89 -5.804)" fill="#fff"/>
                    </svg>
                </div>
            </div>
            <div>
                <span className="work-listings__category">{category?.simple_value_formatted}</span>
                <h3 className="work-listings__client">{client?.simple_value_formatted}</h3>
            </div>
        </a>
    </li>
  )
}

export default SingleListing