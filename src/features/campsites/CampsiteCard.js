// Step 1: Importing components from reactstrap
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

// Step 2: Defining the CampsiteCard function component
const CampsiteCard = (props) => {
    // Step 3 & 4: Rendering the Card component with nested components
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            />
            <CardImgOverlay>
                {/* Step 5: Adding CardTitle inside CardImgOverlay */}
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

// Step 6: Exporting the CampsiteCard component
export default CampsiteCard;