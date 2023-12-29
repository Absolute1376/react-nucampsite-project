// Step 1: Importing components from reactstrap
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

// Step 2: Defining the CampsiteCard function component
const CampsiteCard = ({ campsite }) => {
    const { id, image, name } = campsite;
    // Step 3 & 4: Rendering the Card component with nested components
    return (
    <Link to={`${id}`}>
        <Card>
            <CardImg 
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                {/* Step 5: Adding CardTitle inside CardImgOverlay */}
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    </Link>
    );
};

// Step 6: Exporting the CampsiteCard component
export default CampsiteCard;