import {tutorials} from "../../../data";
export default function handler(req, res) {
    const {tutorialId} = req.query;
    const tutorial = tutorials.find(tutorial => tutorial.id === Number(tutorialId));
    res.status(200).json(tutorial)
  }