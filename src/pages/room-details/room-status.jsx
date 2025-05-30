import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CommentReviews, SeparateRoom  } from './components';

const RoomStatusConteiner = ({ className }) => {
	const specificHotel = useSelector(selector);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(loadedHotel(params.id));
	}, []);

	return (
		<div className={className}>
			<SeparateRoom  />
			<CommentReviews />
		</div>
	);
};

export const RoomStatus = styled(RoomStatusConteiner)``;
