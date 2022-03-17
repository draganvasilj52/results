import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMatch } from '../../features/footballSlice'
import classes from './AddMatchModal.module.css'
import { useSelector } from 'react-redux'

function AddMatchModal({ country, category, league }) {
  const [homeTeam, setHomeTeam] = useState('')
  const [awayTeam, setAwayTeam] = useState('')
  const [homeScore, setHomeScore] = useState('')
  const [awayScore, setAwayScore] = useState('')
  const [matchStart, setMatchStart] = useState('')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const matchesNum = useSelector((state) => state.creator.matches.length)

  const handleSubmit = (e) => {
    e.preventDefault()

    const matchInfo = {
      id: matchesNum + 1,
      league,
      homeTeam,
      awayTeam,
      category,
      homeScore,
      awayScore,
      matchStart,
      countryCode: country,
    }
    dispatch(addMatch(matchInfo))
    handleClose()
  }

  return (
    <>
      <button id={classes['custom-btn']} onClick={handleShow}>
        +
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Match Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Home Team</Form.Label>
              <Form.Control
                onChange={(e) => setHomeTeam(e.target.value)}
                type="text"
                value={homeTeam}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Away Team</Form.Label>
              <Form.Control
                value={awayTeam}
                onChange={(e) => setAwayTeam(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Home Score</Form.Label>
              <Form.Control
                value={homeScore}
                onChange={(e) => setHomeScore(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Away Score</Form.Label>
              <Form.Control
                value={awayScore}
                onChange={(e) => setAwayScore(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Match Start</Form.Label>
              <Form.Control
                value={matchStart}
                onChange={(e) => setMatchStart(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Add Match</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMatchModal
