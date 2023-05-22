

const { open, close, onSuccess } = useCreateSatisfaction({ origin: Origin, related_to_id: string, related_to_type: string });



// le model contiendra l'origin et les champs related_to, pas la peine de les spécifier du coup
const { open, close, onSuccess } = useEditSatisfaction(satisfactionUuid: string);