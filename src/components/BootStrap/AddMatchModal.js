import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMatch } from '../../features/footballSlice'
import { useSelector } from 'react-redux'

function AddMatchModal({ country, category, league, show, setShow }) {
  const [matchInputs, setMatchInputs] = useState({
    homeTeam: '',
    awayTeam: '',
    homeScore: '',
    awayScore: '',
    matchStart: '',
  })

  const handleClose = () => setShow(false)

  const dispatch = useDispatch()

  const matchesNum = useSelector((state) => state.creator.matches.length)

  const handleInputs = (inputValue, inputKey) => {
    setMatchInputs((prevState) => ({
      ...prevState,
      [inputKey]: inputValue,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const matchInfo = {
      id: matchesNum + 1,
      league,
      homeTeam: matchInputs.homeTeam,
      awayTeam: matchInputs.awayTeam,
      category,
      homeScore: matchInputs.homeScore,
      awayScore: matchInputs.awayScore,
      matchStart: matchInputs.matchStart,
      countryCode: country,
    }
    dispatch(addMatch(matchInfo))
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Match Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Home Team</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e.target.value, 'homeTeam')}
                type="text"
                value={matchInputs.homeTeam}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Away Team</Form.Label>
              <Form.Control
                value={matchInputs.awayTeam}
                onChange={(e) => handleInputs(e.target.value, 'awayTeam')}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Home Score</Form.Label>
              <Form.Control
                value={matchInputs.homeScore}
                onChange={(e) => handleInputs(e.target.value, 'homeScore')}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Away Score</Form.Label>
              <Form.Control
                value={matchInputs.awayScore}
                onChange={(e) => handleInputs(e.target.value, 'awayScore')}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Match Start</Form.Label>
              <Form.Control
                value={matchInputs.matchStart}
                onChange={(e) => handleInputs(e.target.value, 'matchStart')}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Add Match</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddMatchModal
