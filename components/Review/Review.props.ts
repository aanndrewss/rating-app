import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReviewModel } from '../../interfaces/IProduct'


export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: ReviewModel
}