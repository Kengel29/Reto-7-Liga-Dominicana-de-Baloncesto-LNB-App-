import { useState } from 'react';

const INITIAL_COMMENTS = [
  { id: 1, user: 'Klomer_SD', team: 'Titanes', text: '¡Hoy Titanes remonta en la Arena! Vamos con todo 🔥', time: 'Hace 5 min', likes: 12 },
  { id: 2, user: 'SantiagoBasketFan', team: 'Metros', text: 'Víctor Liz no falla en momentos claves, ¡el rey del Cibao!', time: 'Hace 12 min', likes: 24 },
  { id: 3, user: 'Veganazo_05', team: 'Reales', text: 'El Fernando Teruel tumba a cualquiera. ¡La Vega es Basket!', time: 'Hace 25 min', likes: 18 },
];

export default function useComments() {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [newComment, setNewComment] = useState('');
  const [selectedTeamFan, setSelectedTeamFan] = useState('Titanes');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([{ id: Date.now(), user: 'Fan_Dominicano', team: selectedTeamFan, text: newComment, time: 'Justo ahora', likes: 1 }, ...comments]);
    setNewComment('');
  };

  return { comments, newComment, setNewComment, selectedTeamFan, setSelectedTeamFan, handleAddComment };
}
