export interface IEditorInput {
  className?: string,
  label: string, 
  name: string,  
  value: string | number, 
  type: string, 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, 
  message?: string,
  step?: string
}