import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

export default function AllCards() {
    return (<>
    <div  style={{ marginTop: "3rem", marginBottom: "1rem", padding: "1rem"}}>
        <CardDeck>
        <Card>
            <Card.Img variant="top" src="/images/betoForever_sticker10pack__33847.1547494425.305.305.png" />
            <Card.Body>
            <Card.Title>Custom Stickers</Card.Title>
            <Card.Text>
                We print durable, weatherproof stickers in any shape or size.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Link href="/pricing">Click here for an estimate</Card.Link>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="/images/makeAustinWierdAgain_royal_unisexFront__13998.1484863962.386.513.png" />
            <Card.Body>
            <Card.Title>Custom Shirts</Card.Title>
            <Card.Text>
                We offer full color DTG printing as well as screen printing.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Estimating page coming soon!</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="/images/cuppajoe.jpg" />
            <Card.Body>
            <Card.Title>Misc Items</Card.Title>
            <Card.Text>
                We can print custom mugs, buttons, and banners just to name a few!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Estimating page coming soon!</small>
            </Card.Footer>
        </Card>
        </CardDeck>
        </div>
    </>)
}
